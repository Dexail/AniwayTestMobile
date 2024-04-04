import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import Text from 'components/Text';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface iProps {
  date: Date;
  loading: boolean;
  setDate: (date: Date) => void;
}

const DatePicker: React.FC<iProps> = ({ date, loading, setDate }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const setPrev = () => {
    setDate(moment(date).subtract(1, 'day').toDate());
  };

  const setNext = () => {
    setDate(moment(date).add(1, 'day').toDate());
  };

  return (
    <View>
      <View style={styles.datepicker}>
        <Button
          icon="chevron-forward-outline"
          disabled={loading}
          iconSize={18}
          iconStyle={styles.navIcon}
          onClick={setPrev}
        />
        <TouchableOpacity disabled={loading} onPress={() => setOpen(true)}>
          <Text font="light" style={styles.date}>
            {moment(date).format('dddd DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <Button
          icon="chevron-back-outline"
          disabled={loading}
          iconSize={18}
          iconStyle={styles.navIcon}
          onClick={setNext}
        />
      </View>
    </View>
  );
};

export default DatePicker;
