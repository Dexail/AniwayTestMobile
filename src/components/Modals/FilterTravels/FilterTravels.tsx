import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HStack, VStack } from '@react-native-material/core';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import travelsFilterStyles from 'assets/styles/travelsFilterStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { popupMenuActions } from 'store/slices/popupMenu';
import { modalsActionsType } from 'store/actions/popupMenuActions';
import { useDispatch } from 'react-redux';
import commonStyles from 'assets/styles/commonStyles';

export interface ITravelsFilterData {
  id: string;
  name: string;
  isSelected: boolean;
}

interface IFilterTravelsProps {
  id: string;
  data: ITravelsFilterData[];
  updateFilter: (id: string) => void;
}

export default function FilterTravels({ id, data, updateFilter }: IFilterTravelsProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const closeModal = (idElement: string) => {
    updateFilter(idElement);
    dispatch(
      popupMenuActions.closeModal({
        type: modalsActionsType.CLOSE_MODAL,
        id,
      })
    );
  };

  return <View>
    <VStack
      style={travelsFilterStyles.container}>
      {data && data.map((element: ITravelsFilterData): ReactElement =>
        <HStack key={element.id} style={[
          travelsFilterStyles.element,
          element.isSelected && travelsFilterStyles.selectedElement,
        ]}>
          <TouchableOpacity
            style={travelsFilterStyles.selectedElementTouchable}
            onPress={() => closeModal(element.id)}
          >
            <HStack style={travelsFilterStyles.selectedElementBlock}>
              <Text style={[commonStyles.fontWeightLight]}>{t(element.name)}</Text>
              {element.isSelected && <Icon  style={travelsFilterStyles.selectedElementIcon} name={'checkmark'}/>}

            </HStack>
          </TouchableOpacity>
        </HStack>
      )}
    </VStack>
  </View>;
}
