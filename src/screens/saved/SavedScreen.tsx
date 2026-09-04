import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFocusEffect } from "@react-navigation/native";

import { getSavedTrips } from "../../services/tripService";

const SavedScreen = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<any | null>(null);

  const loadTrips = async () => {
    try {
      const response = await getSavedTrips();
      setTrips(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTrips();
    }, [])
  );

  const onRefresh = () => {
    setRefreshing(true);
    loadTrips();
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => setSelectedTrip(item)}
    >
      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={styles.route} numberOfLines={1}>
            {item.start} → {item.destination}
          </Text>
          <Text style={styles.chevron}>›</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.distance}>📏 {item.distance} km</Text>
          <Text style={styles.stops}>📍 {item.route?.length || 0} Stops</Text>
        </View>
        <Text style={styles.date}>
          Saved on {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loader} edges={['top', 'bottom']}>
        <ActivityIndicator
          size="large"
          color="#1565C0"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
    <FlatList
      data={trips}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ListHeaderComponent={
        <>
          <Text style={styles.title}>
            💾 Saved Trips
          </Text>

          <Text style={styles.subtitle}>
            Your saved journeys
          </Text>
        </>
      }
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            No saved trips yet.
          </Text>
        </View>
      }
    />

    <Modal
      visible={selectedTrip !== null}
      transparent
      animationType="fade"
      onRequestClose={() => setSelectedTrip(null)}
    >
      {selectedTrip && (
        <View style={styles.modalBackdrop}>
          <View style={styles.tripModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedTrip(null)}
              accessibilityLabel="Close saved trip details"
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              {selectedTrip.start} → {selectedTrip.destination}
            </Text>
            <View style={styles.modalStats}>
              <Text style={styles.modalStat}>📏 {selectedTrip.distance} km</Text>
              <Text style={styles.modalStat}>
                📍 {selectedTrip.route?.length || 0} Stops
              </Text>
            </View>
            <Text style={styles.modalDate}>
              Saved on {new Date(selectedTrip.createdAt).toLocaleDateString()}
            </Text>

            <Text style={styles.stopsTitle}>Journey stops</Text>
            {(selectedTrip.route || []).map((city: string, index: number) => (
              <View key={`${city}-${index}`} style={styles.stopRow}>
                <View style={styles.stopDot} />
                <Text style={styles.stopName}>{city}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </Modal>
    </SafeAreaView>
  );
};

export default SavedScreen;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F4F7FB",
    flexGrow: 1,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F7FB",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1565C0",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardBody: {
    padding: 17,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  route: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1565C0",
    marginBottom: 10,
    flex: 1,
  },

  chevron: {
    fontSize: 30,
    lineHeight: 30,
    color: "#1565C0",
    marginLeft: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  distance: {
    fontSize: 16,
    color: "#2E7D32",
    marginBottom: 5,
  },

  stops: {
    fontSize: 15,
    color: "#555",
    marginBottom: 5,
  },

  date: {
    fontSize: 13,
    color: "#999",
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  emptyText: {
    fontSize: 18,
    color: "#999",
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    padding: 20,
  },

  tripModal: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 22,
    maxHeight: "85%",
  },

  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    alignItems: "center",
    justifyContent: "center",
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 30,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1565C0",
    marginTop: 18,
    marginHorizontal: 20,
    marginRight: 60,
  },

  modalStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginHorizontal: 20,
  },

  modalStat: {
    color: "#2E7D32",
    fontWeight: "700",
  },

  modalDate: {
    color: "#888",
    fontSize: 13,
    marginTop: 10,
    marginHorizontal: 20,
  },

  stopsTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },

  stopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
    marginHorizontal: 20,
  },

  stopDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#1565C0",
    marginRight: 10,
  },

  stopName: {
    color: "#4B5563",
    fontSize: 15,
  },
});
