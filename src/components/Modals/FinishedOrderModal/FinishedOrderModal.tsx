import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { popupMenuActions } from 'store/slices/popupMenu';
import { modalsActionsType } from 'store/actions/popupMenuActions';
import { VStack } from '@react-native-material/core';
import IconComponent from 'components/Icon';
import Button from 'components/Button';
import finishedOrderModalStyles from 'assets/styles/finishedOrderModalStyles';
import commonStyles from 'assets/styles/commonStyles';

interface IFinishedOrderModalProps{
  id: string;
  onCallback: () => void;
}

export default function FinishedOrderModal({ id, onCallback }: IFinishedOrderModalProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const closeModal = () => {
    onCallback();
    dispatch(
      popupMenuActions.closeModal({
        type: modalsActionsType.CLOSE_MODAL,
        id,
      })
    );
  };

  return (<View>
    <VStack style={finishedOrderModalStyles.container}>
      <IconComponent style={finishedOrderModalStyles.blockLogo} isSvg={false} name={'finishedCarLogo'} />
      <VStack>
        <Text style={[commonStyles.fontWeightMedium, finishedOrderModalStyles.title]}>{t('common:you-have-arrived')}</Text>
        <Text style={[commonStyles.fontWeightLight, finishedOrderModalStyles.description]}>{t('common:trip-is-over-waiting-to-meet-you-again-soon')}</Text>
      </VStack>
      <Button onClick={closeModal} style={finishedOrderModalStyles.button} title={t('common:finished-trip')}></Button>
    </VStack>
  </View>);
}
