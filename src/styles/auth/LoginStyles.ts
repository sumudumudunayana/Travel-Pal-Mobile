import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    paddingHorizontal: 20,
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
    paddingTop: 55,
    paddingBottom: 18,
  },

  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderRadius: 28,
    marginTop: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
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
    fontSize: 15,
    color: '#757575',
    marginBottom: 30,
  },

  errorText: {
    backgroundColor: '#FFEBEE',
    color: '#D32F2F',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#424242',
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#212121',
  },

  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },

  forgotText: {
    color: '#1565C0',
    fontWeight: '600',
  },

  loginButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 16,
    borderRadius: 14,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1565C0',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#757575',
  },

  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },

  googleButtonText: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#212121',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  signupText: {
    color: '#757575',
  },

  signupLink: {
    color: '#1565C0',
    fontWeight: 'bold',
  },

});
