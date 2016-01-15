'use strict';


import React, {
  ViewPagerAndroid,
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';
import TabBar from './component/TabBar';
import TabGroup from './component/TabGroup';

class TabComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 3,
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.halfContiner}>
          <TabBar>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              selected={true}
              title='title1' >
              <Text>0</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge=' '
              title='title2' >
              <Text>1</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge={6}
              title='title3' >
              <Text>2</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge={99}
              title='title3' >
              <Text>3</Text>
            </TabBar.Item>
          </TabBar>
        </View>

        <View style={styles.halfContiner}>
          <ViewPagerAndroid
            style={{flex: 1}}
            initialPage={1}
            ref={viewPager => { this.viewPager = viewPager; }}>
            <View style={{flex: 1}}>
              <Text>0</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'rgb(212, 226, 59)'}}>
              <Text>1</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>2</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>3</Text>
            </View>
          </ViewPagerAndroid>

          <TabGroup
            onSelectedChange={this.onSelectedChange.bind(this)}>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              title='title1' >
            </TabBar.Item>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge=' '
              title='title2' >
            </TabBar.Item>
            <TabBar.Item
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge={66}
              title='title3' >
            </TabBar.Item>
            <TabBar.Item
              selected={true}
              icon={require('./image/start_normall.png')}
              selectedIcon={require('./image/start_hightlight.png')}
              badge={6}
              title='title3' >
            </TabBar.Item>
          </TabGroup>
        </View>
      </View>
    );
  }

  onSelectedChange(index) {
    this.viewPager.setPage(index);
  }
}

let styles = StyleSheet.create({
  halfContiner: {
    flex: 1,
  }
});

AppRegistry.registerComponent('TabComponentDemo', () => TabComponentDemo);
