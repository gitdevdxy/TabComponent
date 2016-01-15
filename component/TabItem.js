'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

class TabItem extends Component {
  constructor(props){
    super(props);

  }
  static defaultProps = {};
  static propTypes = {
    ...View.propTypes,
    style: View.propTypes.style,
    /** 小红点 */
    badge: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    badgeStyle: View.propTypes.style,

    icon: Image.propTypes.source,
    selectedIcon: Image.propTypes.source,

    onPress: React.PropTypes.func,
    selected: React.PropTypes.bool,

    title: React.PropTypes.string,
    titleStyle: Text.propTypes.style,
    selectedTitleStyle: Text.propTypes.style,
  };

  initBadge() {
    if (this.props.badge) {
      let _badgeStyle = (typeof this.props.badge == 'number') ? styles.badgeWithNumber : styles.badgeNoNumber;
      return (
        <View style={[_badgeStyle, this.props.badgeStyle]}>
          <Text style={styles.badgeText}>{this.props.badge}</Text>
        </View>
      );
    }
  }

  render() {
    var {
      selected,
      onPress,
      style,
      icon,
      selectedIcon,
      title,
      titleStyle,
      selectedTitleStyle,
    } = this.props;

    return(
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, style]}>

          <Image
            source={selected ? selectedIcon : icon}
            style={styles.icon} />

          <Text style={[
              styles.title,
              selected ? selectedTitleStyle : titleStyle,]}>
            {title}
          </Text>

          {this.initBadge()}

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  icon: {
    alignSelf: 'center',
    width: 23,
    height: 23,
  },
  title: {
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  badgeNoNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 4,
    right: 24,
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#ffffff',
    backgroundColor: '#ff0000',
  },
  badgeWithNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 4,
    right: 24,
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ff0000',
  },
  badgeText: {
    alignSelf: 'center',
    fontSize: 11,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});

module.exports = TabItem;
