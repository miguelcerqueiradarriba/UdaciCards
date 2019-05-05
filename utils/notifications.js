import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

export function clearLocalNotification() {
    return Notifications.cancelAllScheduledNotificationsAsync;
}

function createNotification() {
    return {
        title: 'Make the quiz of the day!',
        body: "👋 Don't forget to make a quiz every day!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({status}) => {
            if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync();

                let notificationTime = new Date();
                notificationTime.setHours(18);
                notificationTime.setMinutes(0);

                if (notificationTime.getHours() <= new Date().getHours()) {
                    notificationTime.setHours(notificationTime.getHours() + 24);
                }

                Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                        time: notificationTime,
                        repeat: 'day',
                    }
                );
            }
        })
}