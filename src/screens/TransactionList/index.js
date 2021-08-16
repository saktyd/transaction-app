import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  MainContainer,
  TransactionSearch,
  TransactionCard,
  LoadingContainer,
  NoDataContainer,
} from '../../components';
import {fetchTransactions} from '../../config/redux/actions';
import {COLORS} from '../../constant';

export default () => {
  const disptach = useDispatch();
  const insets = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState('');
  const [pickerValue, setPickerValue] = useState('URUTKAN');
  const {transactions, isLoadingTransactions} = useSelector(
    ({transc}) => transc,
  );

  const isKeywordIncluded = useCallback(
    target => {
      target = target.toString();
      return target.toLowerCase().includes(inputValue.toLowerCase());
    },
    [inputValue],
  );

  const list = useMemo(() => {
    let filter = [].concat(transactions);
    if (inputValue) {
      // Filter by input / search keyword
      filter = filter.filter(
        item =>
          isKeywordIncluded(item.beneficiary_name) ||
          isKeywordIncluded(item.beneficiary_bank) ||
          isKeywordIncluded(item.sender_bank) ||
          isKeywordIncluded(item.amount),
      );
    }

    // Sorting section
    if (pickerValue === 'Nama A-Z') {
      return filter.sort((a, b) =>
        a.beneficiary_name.localeCompare(b.beneficiary_name),
      );
    } else if (pickerValue === 'Nama Z-A') {
      return filter.sort((a, b) =>
        b.beneficiary_name.localeCompare(a.beneficiary_name),
      );
    } else if (pickerValue === 'Tanggal Terbaru') {
      return filter.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    } else if (pickerValue === 'Tanggal Terlama') {
      return filter.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at),
      );
    } else {
      return filter;
    }
  }, [transactions, inputValue, pickerValue, isKeywordIncluded]);

  const renderItem = ({item}) => {
    return <TransactionCard {...{item}} />;
  };

  useEffect(() => {
    disptach(fetchTransactions());
  }, [disptach]);

  return (
    <MainContainer style={{padding: 7}}>
      <TransactionSearch
        {...{
          inputValue,
          setInputValue,
          pickerValue,
          setPickerValue,
        }}
      />
      <FlatList
        data={list}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContainer(insets.bottom)}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
        ListEmptyComponent={
          isLoadingTransactions ? <LoadingContainer /> : <NoDataContainer />
        }
        refreshControl={
          <RefreshControl
            refreshing={false}
            colors={[COLORS.primary]}
            onRefresh={() => disptach(fetchTransactions())}
          />
        }
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: insetsBottom => ({
    flexGrow: 1,
    paddingTop: 7,
    paddingBottom: insetsBottom || 7,
  }),
});
