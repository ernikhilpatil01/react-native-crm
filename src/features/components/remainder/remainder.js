import React, { useEffect } from "react";
import { Keyboard } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Button from "../../../components/Button";

const onSubmit = (seconds, customer) => {
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: "Notification",
      body: `Open the app and contact ${customer} asap!`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue"
    },
    trigger: {
      seconds: seconds,
    },
  }
  // Notifications show only when app is not active.
  // (ie. another app being used or device"s screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  )
}

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!")
}

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === "granted")
    console.log("Notification permissions granted.")
}

const Remainder = ({customer}) => {
  useEffect(() => {
    askNotification()

    const listener = Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
  }, [])

  return (
        <Button
            onPress={() => onSubmit(5, customer)}
            text="Set Remainder in 5 secs"
            disabled={false}
        />
    )
}

export default Remainder;