import { Box } from 'native-base'
import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux'
import NBFlatList from '../../components/miscellaneous/NBFlatList';
import NBSlide from '../../components/miscellaneous/NBSlide';
import { getItems } from '../../store/actions';


export default function ManageItems() {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state.reducer);

  console.log('ManageItems :: reducerData :: ', reducerData);
  useEffect(() => {
    async function asynFun() {
      const res = await dispatch(getItems());
      if (!res.status) {
        <NBSlide type='error' message={res.message} />
        return;
      }
      <NBSlide type='success' message="Signup success" />
    }
    asynFun()
  }, [])



  // console.log('ManageItems :: data :: ', data);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      {reducerData?.allItems  && <NBFlatList data={
        reducerData?.allItems.map(item => ({
          arg1: item.name,
          arg2: item.cost,
          arg3: item.discount,
          list: item.productFeatures,
          delete: true
        }))
      } />}

    </KeyboardAwareScrollView>
  )
}
