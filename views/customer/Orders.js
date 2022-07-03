import { Box, Text } from 'native-base'
import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import NBFlatList1 from '../../components/miscellaneous/NBFlatList1';
import NBSlide from '../../components/miscellaneous/NBSlide';
import { getItems, getOrders } from '../../store/actions';

export default function Orders() {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state.reducer);

  console.log('AllItems :: reducerData :: ', reducerData);
  useEffect(() => {
    async function asynFun() {
      const res = await dispatch(getOrders());
      if (!res.status) {
        <NBSlide type='error' message={res.message} />
        return;
      }
      <NBSlide type='success' message="Signup success" />
    }
    asynFun()
  }, [])

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      {reducerData?.allItems && <NBFlatList1 data={reducerData.allOrders} />}

    </KeyboardAwareScrollView>
  )
}
