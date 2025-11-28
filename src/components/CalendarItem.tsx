import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "../types";

type CalendarItemProps = {
  calendar: Calendar;
};
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();

const CalendarItem = ({ calendar }: CalendarItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.sunday}</Text>
        <Text style={styles.day}>{weekdays[0]}</Text>
        <Text style={styles.date}>23</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.monday}</Text>
        <Text style={styles.day}>{weekdays[1]}</Text>
        <Text style={styles.date}>24</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.tuesday}</Text>
        <Text style={styles.day}>{weekdays[2]}</Text>
        <Text style={styles.date}>25</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.wednesday}</Text>
        <Text style={styles.day}>{weekdays[3]}</Text>
        <Text style={styles.date}>26</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.thursday}</Text>
        <Text style={styles.day}>{weekdays[4]}</Text>
        <Text style={styles.date}>27</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.friday}</Text>
        <Text style={styles.day}>{weekdays[5]}</Text>
        <Text style={styles.date}>28</Text>
      </View>
      <View style={styles.calendarItem}>
        <Text style={styles.active}>{calendar.saturday}</Text>
        <Text style={styles.day}>{weekdays[6]}</Text>
        <Text style={styles.date}>29</Text>
      </View>
    </View>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
  },
  calendarItem: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0000001a",
  },
  active: {
    borderRadius: 25,
    backgroundColor: "orange",
    height: 10,
    width: 10,
    marginBottom: 5,
  },
  day: { fontSize: 10 },
  date: { fontWeight: "bold", marginBottom: 10 },
});
