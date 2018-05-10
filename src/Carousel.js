import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Animated,
  ScrollView,
  View,
  Platform,
  Dimensions,
  PanResponder
} from "react-native";
import { withTheme } from "./Theme";

class Carousel extends Component {
  static themeConfig = {
    style: {
      pageIndicatorStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
        backgroundColor: "rgba(0,0,0,.4)"
      },
      activePageIndicatorStyle: {
        position: "absolute",
        backgroundColor: "#ffc81f"
      },
      pageIndicatorContainerStyle: {
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
        bottom: 10
      }
    }
  };
  static defaultProps = {
    width: Dimensions.get("window").width,
    index: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    slipFactor: 1,
    showsPageIndicator: true,
    pageIndicatorOffset: 16,
    animation: (animate, toValue) => {
      return Animated.spring(animate, {
        toValue: toValue,
        friction: 10,
        tension: 50
      });
    }
  };

  scrollView;

  autoPlayTimer = 0;
  pageAnimation;
  panResponder;
  currentIndex = 0;
  panStartIndex = 0;
  panOffsetFactor = 0;

  constructor(props) {
    super(props);
    this.state = {
      scrollValue: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        this.startPanResponder();
        return true;
      },
      onMoveShouldSetPanResponder: (e, g) => {
        if (Math.abs(g.dx) > Math.abs(g.dy)) {
          this.startPanResponder();
          return true;
        } else {
          return false;
        }
      },
      onPanResponderTerminationRequest: () => {
        return false;
      },
      onPanResponderGrant: () => {
        this.startPanResponder();
      },
      onPanResponderStart: (e, g) => {
        this.startPanResponder();
      },
      onPanResponderMove: (e, g) => {
        this.panOffsetFactor = this.computePanOffset(g);
        this.gotoPage(this.panStartIndex + this.panOffsetFactor, false);
      },
      onPanResponderEnd: (e, g) => {
        this.endPanResponder(g);
        this.scrollView.scrollTo({ x: 0, animated: false });
      }
    });
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this.startAutoPlay();
    }
    this.gotoPage(this.props.index + (this.props.loop ? 1 : 0), false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.autoplay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    if (!this.autoPlayTimer) {
      this.autoPlayTimer = setInterval(() => {
        this.gotoNextPage();
      }, this.props.autoplayTimeout);
    }
  }
  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = 0;
    }
  }

  computePanOffset(g) {
    let offset = -g.dx / (this.props.width / this.props.slipFactor);
    if (Math.abs(offset) > 1) {
      offset = offset > 1 ? 1 : -1;
    }
    return offset;
  }

  startPanResponder() {
    this.stopAutoPlay();
    this.panStartIndex = this.currentIndex;
    this.panOffsetFactor = 0;
    if (this.pageAnimation) {
      const index = this.currentIndex;
      this.pageAnimation.stop();
      this.gotoPage(index);
    }
  }

  endPanResponder(g) {
    if (this.props.autoplay) {
      this.startAutoPlay();
    }
    let newIndex = this.currentIndex;
    this.panOffsetFactor = this.computePanOffset(g);
    if (
      this.panOffsetFactor > 0.5 ||
      (this.panOffsetFactor > 0 && g.vx <= -0.1)
    ) {
      newIndex = Math.floor(this.currentIndex + 1);
    } else if (
      this.panOffsetFactor < -0.5 ||
      (this.panOffsetFactor < 0 && g.vx >= 0.1)
    ) {
      newIndex = Math.ceil(this.currentIndex - 1);
    } else {
      newIndex = Math.round(this.currentIndex);
    }

    if (this.currentIndex === newIndex) {
      return;
    }
    this.gotoPage(newIndex);
  }

  gotoNextPage(animated = true) {
    const childrenNum = this.getChildrenNum();
    if (!this.props.loop) {
      if (this.currentIndex === childrenNum - 1) {
        return;
      }
    }
    this.gotoPage(Math.floor(this.currentIndex) + 1);
  }

  gotoPage(index, animated = true, cb = () => {}) {
    const childrenNum = this.getChildrenNum();
    if (childrenNum <= 1) {
      return cb();
    }
    if (index < 0) {
      index = 0;
    }
    if (index > childrenNum - 1) {
      index = childrenNum - 1;
    }

    const setIndex = index => {
      this.currentIndex = index;
      if (this.props.onPageChanged && Number.isInteger(this.currentIndex)) {
        this.props.onPageChanged(this.getCurrentPage());
      }
    };

    if (animated) {
      this.pageAnimation = this.props.animation(this.state.scrollValue, index);
      const animationId = this.state.scrollValue.addListener(state => {
        setIndex(state.value);
      });
      this.pageAnimation.start(() => {
        this.state.scrollValue.removeListener(animationId);
        setIndex(index);
        this.pageAnimation = null;
        this.loopJump();
        cb();
      });
    } else {
      this.state.scrollValue.setValue(index);
      setIndex(index);
      this.loopJump();
      cb();
    }
  }

  /**
   * -0.5 <= pageIndex <= (pages.length - 1 + 0.5)
   */
  getCurrentPage() {
    const childrenNum = this.getChildrenNum();
    if (childrenNum <= 1) {
      return childrenNum;
    }

    const index = this.currentIndex;
    if (this.props.loop) {
      if (index < 0.5) {
        return index + childrenNum - 2 - 1;
      } else if (index > childrenNum - 2 + 0.5) {
        return index - childrenNum + 1;
      } else {
        return index - 1;
      }
    } else {
      return index;
    }
  }

  loopJump() {
    if (!this.props.loop) {
      return;
    }
    const childrenNum = this.getChildrenNum();
    if (childrenNum <= 1) {
      return;
    }
    if (this.currentIndex === 0) {
      this.gotoPage(childrenNum - 2, false);
    } else if (this.currentIndex === childrenNum - 1) {
      this.gotoPage(1, false);
    }
  }

  getChildrenNum() {
    const { children, loop } = this.props;
    let pages = React.Children.toArray(children);
    if (pages.length < 2) {
      return 1;
    }
    if (loop) {
      return pages.length + 2;
    } else {
      return pages.length;
    }
  }

  renderIndicator(config) {
    if (!this.props.showsPageIndicator) {
      return null;
    }
    if (this.props.renderPageIndicator) {
      return this.props.renderPageIndicator(config);
    }

    const { childrenNum, pageNum, loop, scrollValue } = config;
    if (pageNum === 0) {
      return null;
    }

    const indicators = [];
    for (let i = 0; i < pageNum; i++) {
      indicators.push(
        <View
          key={i}
          style={[
            this.props.theme.pageIndicatorStyle,
            this.props.pageIndicatorStyle
          ]}
        />
      );
    }

    const offset = this.props.pageIndicatorOffset;

    let left;

    if (pageNum === 1) {
      left = this.state.scrollValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0]
      });
    } else if (!loop) {
      left = this.state.scrollValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, offset]
      });
    } else {
      left = this.state.scrollValue.interpolate({
        inputRange: [0, 1, 2, childrenNum - 2, childrenNum - 1],
        outputRange: [
          0,
          0,
          offset,
          offset * (childrenNum - 3),
          offset * (childrenNum - 3)
        ]
      });
    }

    return (
      <View
        style={[
          this.props.theme.pageIndicatorContainerStyle,
          this.props.pageIndicatorContainerStyle
        ]}
      >
        {indicators}
        <Animated.View
          style={[
            this.props.theme.pageIndicatorStyle,
            this.props.theme.activePageIndicatorStyle,
            this.props.pageIndicatorStyle,
            this.props.activePageIndicatorStyle,
            { left: left }
          ]}
        />
      </View>
    );
  }

  render() {
    const { children, width, loop } = this.props;
    const { scrollValue } = this.state;

    let pages = React.Children.toArray(children);
    const pageNum = pages.length;
    if (loop && pages.length > 1) {
      pages.unshift(pages[pages.length - 1]);
      pages.push(pages[1]);
    }

    pages = pages.map((page, index) => {
      return (
        <View key={index} style={{ width: width }}>
          {page}
        </View>
      );
    });

    const childrenNum = pages.length;
    let content = null;

    if (childrenNum > 0) {
      const translateX = scrollValue.interpolate({
        inputRange: [0, 1, childrenNum],
        outputRange: [0, -width, -childrenNum * width]
      });
      content = (
        <Animated.View
          style={{
            flexDirection: "row",
            width: width * childrenNum,
            transform: [{ translateX }]
          }}
          {...this.panResponder.panHandlers}
        >
          {pages}
        </Animated.View>
      );
    }
    return (
      <View>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          style={{ width: width }}
          contentContainerStyle={{ width: width + 1 }}
          horizontal
          pagingEnabled
          directionalLockEnabled
          bounces={false}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={Platform.OS === "ios" ? true : false}
        >
          {content}
        </ScrollView>
        {this.renderIndicator({ childrenNum, pageNum, loop, scrollValue })}
      </View>
    );
  }
}

export default withTheme("Carousel", Carousel);
