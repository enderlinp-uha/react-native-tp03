import { Alert } from 'react-native'

export const showError = message => {
  Alert.alert('Erreur', typeof message === 'string' ? message : 'Une erreur est survenue.')
}
