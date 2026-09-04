import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E8F3FA',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  header: {
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: 18,
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1565C0',
  },

  logo2: {
    color: '#26A69A',
  },

  content: {
    marginHorizontal: 20,
    marginTop: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    borderRadius: 28,
    shadowColor: '#1565C0',
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 7,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },

  subtitle: {
    color: '#757575',
    marginBottom: 30,
    fontSize: 15,
  },

  errorText: {
    backgroundColor: '#FFEBEE',
    color: '#D32F2F',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 18,
    color: '#212121',
  },

  registerButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#1565C0',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  loginText: {
    color: '#757575',
  },

  loginLink: {
    color: '#1565C0',
    fontWeight: 'bold',
  },

});
