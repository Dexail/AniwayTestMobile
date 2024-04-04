import { Text, View } from 'react-native';
import styles from './orderSkeletonStyles';
import { Skeleton, SkeletonContainer } from 'react-native-skeleton-component';
import React from 'react';
import { Box, HStack, VStack } from '@react-native-material/core';
import travelStyles from 'assets/styles/travelStyles';
import IconComponent from 'components/Icon';
import commonStyles from 'assets/styles/commonStyles';

export const OrderSkeleton = () => {
  return (<View><SkeletonContainer>

    <VStack style={styles.containerSkeleton}>
      <VStack>
        <HStack style={travelStyles.originAddressContainer}>
          <Box>
            <Skeleton style={styles.iconSkeleton} />
          </Box>
          <Box style={travelStyles.containerAddressText}>
            <Text
              style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}><Skeleton style={styles.title} /> </Text>
            <Text style={travelStyles.containerAddressTextName}><Skeleton style={styles.subtitle} /></Text>
          </Box>
        </HStack>
        <Box style={travelStyles.addressLineContainer}>
          <Skeleton style={styles.iconLineSkeleton} />
        </Box>
        <HStack style={travelStyles.destinationAddressContainer}>
          <Box>
            <Skeleton style={styles.iconSkeleton} />
          </Box>
          <Box style={travelStyles.containerAddressText}>
            <Text
              style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}><Skeleton style={styles.title} /></Text>
            <Text style={travelStyles.containerAddressTextName}><Skeleton style={styles.title} /></Text>
          </Box>
        </HStack>
        <HStack style={travelStyles.dateTravelContainer}>
          <Skeleton style={styles.iconSkeleton} />
          <Text style={[travelStyles.dateTravelValue, commonStyles.fontWeightLight]}><Skeleton style={styles.title} /></Text>
        </HStack>

      </VStack>
      <HStack style={travelStyles.priceBlockContainer}>
        <HStack style={travelStyles.priceBlock}>
          <Box style={travelStyles.priceBlockCash}>
            <Skeleton style={styles.iconSkeleton} />
          </Box>
          <Box style={travelStyles.priceBlockPrices}>
            <Text
              style={[travelStyles.priceBlockTotal, commonStyles.fontWeightMedium]}><Skeleton style={styles.title} /></Text>
            <Text
              style={[travelStyles.priceBlockPricesName, commonStyles.fontWeightLight]}><Skeleton style={styles.title} /></Text>
          </Box>
        </HStack>
        <Box>

        </Box>
      </HStack>

    </VStack>

  </SkeletonContainer>
  </View>);
};
