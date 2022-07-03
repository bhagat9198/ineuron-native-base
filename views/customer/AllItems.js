import { Text } from 'native-base';
import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import NBFlatList1 from '../../components/miscellaneous/NBFlatList1';
import NBFlatList2 from '../../components/miscellaneous/NBFlatList2';
import NBSlide from '../../components/miscellaneous/NBSlide';
import { getItems, orderPlaced } from '../../store/actions';

export default function AllItems() {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state.reducer);

  console.log('AllItems :: reducerData :: ', reducerData);

  const paymentHandler = async (val) => {
    const res = await dispatch(orderPlaced({
      ...val, status: 'Order Placed',
      userId: reducerData.userData.uid, craetedAt: new Date().getTime()}))
    if (!res.status) {
      <NBSlide type='error' message={res.message} />
      return;
    }
    <NBSlide type='success' message="Signup success" />

  }

  useEffect( () => {
    async function asynFun() {
      const res = await dispatch(getItems());
      console.log(res)
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
      {reducerData?.allItems && <NBFlatList2
        handler={val => paymentHandler(val)}
        data={
          reducerData?.allItems.map(item => ({
            arg1: item.name,
            arg2: item.cost,
            arg3: item.discount,
            arg4: item.aboutItem,
            list: item.productFeatures,
            canOrder: true,
            qrCode: false
          }))
        } />}


    </KeyboardAwareScrollView>

  )
}
