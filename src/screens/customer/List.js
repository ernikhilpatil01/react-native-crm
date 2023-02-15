import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import List from '../../features/components/customer/List'


const ListScreen = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <List region={props.route.params}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListScreen
