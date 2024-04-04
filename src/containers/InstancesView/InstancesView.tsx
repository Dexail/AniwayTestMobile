import React, {JSX, useEffect, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import Header from 'components/Header';
import TimePicker from 'components/DatePicker/DatePicker';
import Text from 'components/Text';
import Loader from 'components/Loader';
import Placeholder from 'components/Placeholder';
import Button from 'components/Button';
import service from 'services/instancesService';
import { ordersActions } from 'store/slices/orders';
import { RootState } from 'store/store';
import { IInstances } from 'types/orders';
import styles from 'screens/Passenger/styles';
import variables from 'assets/styles/variables';
import commonStyles from 'assets/styles/commonStyles';
import LoadingMore from './LoadingMore';
import Status from './Status';

interface iProps {
  renderExpandedContent: (section: IInstances) => JSX.Element;
  openMapView: (id: number) => void;
}

interface iState {
  loading: boolean;
  loadMore: boolean;
  error: string;
  page: number;
  date: Date ;
  active: number[];
}

const InstancesView: React.FC<iProps> = ({ renderExpandedContent, openMapView }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isFirstInit = useRef<boolean>(true);
  const [state, setState] = React.useReducer(
    (prevState: iState, newState: Partial<iState>) => ({ ...prevState, ...newState }),
    { loading: false, loadMore: false, page: 1, date: new Date() , active: [], error: '' }
  );

  const { list, hasMore } = useSelector((store: RootState) => store.orders);

  React.useEffect(() => {
    if(isFirstInit.current) return;
    if (state.page === 1) dispatch(ordersActions.clearList());
    service.getInstances(setState, moment(state.date).format('YYYY-MM-DD'), state.page);

  }, [state.date, state.page]);

  const renderSectionHeader = (section: IInstances, index: number, isActive: boolean) => {
    const { trip_name, startTime, endTime, status } = section;

    return <View style={[styles.header, isActive && styles.activeHeader ]}>
      <Text style={styles.headerTime}>
        {`${startTime} - ${endTime}`}
      </Text>
      <View style={styles.name}>
        {!isActive && <Status status={status} />}
        <Text style={{ lineHeight: 20 }} font="bold">{trip_name}</Text>
      </View>
    </View>;
  };

  const changeDate = (nextDate: Date) => {
    dispatch(ordersActions.clearList());
    setState({ active: [], page: 1, date: nextDate });
  };

  const renderSectionContent = (section: IInstances, i: number, isActive: boolean) => {
    return <View style={[styles.content, { opacity: isActive ? 1 : 0 }]}>
      {renderExpandedContent(section)}
      <View style={styles.footer}>
        <Button
          type="link"
          onClick={() => openMapView(section.id)}
          icon="chevron-back-outline"
          title={t('orders:view_button')}
          iconSize={18}
        />
      </View>
    </View>;
  };

  const scrollControl = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20 && !state.loadMore && hasMore) {
      setState({ page: state.page + 1 });
    }
  };

  const renderContent = () => {
    if (state.loading) return <Loader />;
    if (list.length) {
      return (
        <ScrollView
          style={{ marginTop: 15 }}
          onScroll={scrollControl}
          refreshControl={<RefreshControl
            colors={[variables.main]}
            refreshing={false}
            onRefresh={() => setState({ page: 1 })}
          />}
        >
          <Accordion
            sections={list}
            sectionContainerStyle={styles.section}
            renderHeader={renderSectionHeader}
            renderContent={renderSectionContent}
            activeSections={state.active}
            onChange={(active) => setState({ active })}
            underlayColor="transparent"
            duration={500}
          />
        </ScrollView>
      );
    } else {
      return <Placeholder />;
    }
  };

  useEffect(()=>{
    isFirstInit.current = false;
    setState({
      date: new Date()
    });
  },[]);

  return (<View style={commonStyles.screen}>
    {/*<Header title={t('orders:title')} />*/}
    <View style={[commonStyles.content, { paddingBottom: list.length ? 170 : 0, }]} >
      <TimePicker date={state.date} loading={state.loading} setDate={changeDate} />
      <View style={{ flexGrow: 1 }}>
        {state.loadMore && <LoadingMore />}
        {renderContent()}
      </View>
    </View>
  </View>);
};

export default InstancesView;
