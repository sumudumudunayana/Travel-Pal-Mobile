import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F4F7FB',
  },

  header: {
    marginTop: 15,
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1F2937',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },

  plannerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 5,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },

  picker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
    overflow: 'hidden',
  },

  pickerSelect: {
    color: '#111827',
    height: 52,
  },

  pickerItem: {
    color: '#111827',
  },

  destinationPickerSelect: {
    color: '#111827',
    height: 52,
  },

  destinationPickerItem: {
    color: '#111827',
  },

  button: {
    backgroundColor: '#2E7D32',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  startTripButton: {
  backgroundColor: "#34A853",
  height: 55,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
},

startTripButtonText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "700",
},

  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 5,
  },

  routeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1565C0',
    marginBottom: 15,
  },

  distance: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 5,
  },

  stops: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 20,
  },

  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1565C0',
    marginRight: 15,
  },

  city: {
    fontSize: 17,
    color: '#374151',
    fontWeight: '600',
  },

  saveButton: {
    marginTop: 25,
    backgroundColor: '#1565C0',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  summaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  summaryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 20,
    marginBottom: 15,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  summaryIcon: {
    fontSize: 26,
  },

  summaryValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1565C0',
    marginTop: 10,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },

  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  progressTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1565C0',
    marginBottom: 20,
  },

  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressCity: {
    fontWeight: '700',
    color: '#374151',
    fontSize: 15,
  },

  progressLine: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    marginHorizontal: 10,
  },

  progressFill: {
    width: '100%',
    height: 6,
    borderRadius: 5,
    backgroundColor: '#2E7D32',
  },

  progressSubtitle: {
    marginTop: 12,
    color: '#6B7280',
    marginBottom: 20,
  },

  timeline: {
    marginTop: 10,
  },

  timelineItem: {
    flexDirection: 'row',
  },

  timelineLeft: {
    width: 25,
    alignItems: 'center',
  },

  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1565C0',
  },

  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#D1D5DB',
    marginVertical: 2,
  },

  timelineCity: {
    marginLeft: 15,
    marginBottom: 25,
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
  },

  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  filterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 4,
  },

  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  filterTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1565C0',
  },

  clearFilters: {
    color: '#E53935',
    fontWeight: '700',
  },

  filterLabel: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },

  filterPicker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    height: 50,
    justifyContent: 'center',
  },

  filterPickerSelect: {
    color: '#111827',
    height: 50,
  },

  filterPlaceholder: {
    color: '#111827',
  },

  filterColumns: {
    flexDirection: 'row',
    gap: 10,
  },

  filterColumn: {
    flex: 1,
  },

  recommendationTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1565C0',
    marginBottom: 20,
  },

  restaurantItem: {
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  restaurantThumbnail: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    marginBottom: 12,
  },

  restaurantTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  rating: {
    color: '#F59E0B',
    fontWeight: '700',
  },

  restaurantCity: {
    marginTop: 8,
    color: '#6B7280',
  },

  restaurantType: {
    marginTop: 5,
    color: '#1565C0',
    fontWeight: '600',
  },

  restaurantHours: {
    marginTop: 5,
    color: '#374151',
  },

  restaurantPrice: {
    marginTop: 5,
    color: '#2E7D32',
    fontWeight: '700',
  },

  noRecommendation: {
    textAlign: 'center',
    color: '#999',
    paddingVertical: 20,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    padding: 20,
  },

  restaurantModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 22,
  },

  restaurantModalImage: {
    width: '100%',
    height: 190,
  },

  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '400',
  },

  modalRestaurantName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 18,
    marginHorizontal: 20,
  },

  modalRestaurantRating: {
    color: '#F59E0B',
    fontWeight: '700',
    marginTop: 8,
    marginHorizontal: 20,
  },

  modalDetail: {
    color: '#4B5563',
    marginTop: 9,
    marginHorizontal: 20,
  },

  modalDescription: {
    color: '#374151',
    lineHeight: 21,
    marginTop: 14,
    marginHorizontal: 20,
  },

  goButton: {
    backgroundColor: '#1565C0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    marginTop: 20,
    marginHorizontal: 20,
  },

  goButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
