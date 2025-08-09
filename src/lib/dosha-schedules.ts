interface ScheduleType {
  time: string;
  activity: string;
}

interface DoshaSchedule {
  morning: ScheduleType[];
  afternoon: ScheduleType[];
  evening: ScheduleType[];
}

export const doshaSchedules: Record<string, DoshaSchedule> = {
  vata: {
    morning: [
      { time: "6:30 AM", activity: "Wake up - avoid abrupt awakening" },
      { time: "7:00 AM", activity: "Gentle yoga and meditation" },
      { time: "7:30 AM", activity: "Warm oil self-massage" },
      { time: "8:00 AM", activity: "Warm, nourishing breakfast" },
      { time: "9:00 AM", activity: "Start work/activities when feeling grounded" }
    ],
    afternoon: [
      { time: "12:30 PM", activity: "Main meal of the day (warm lunch)" },
      { time: "1:30 PM", activity: "Gentle walk" },
      { time: "3:30 PM", activity: "Warm tea break" },
      { time: "4:00 PM", activity: "Creative or focused work" }
    ],
    evening: [
      { time: "6:00 PM", activity: "Light dinner" },
      { time: "7:00 PM", activity: "Relaxing activity" },
      { time: "8:30 PM", activity: "Begin winding down" },
      { time: "9:30 PM", activity: "Bedtime routine" },
      { time: "10:00 PM", activity: "Sleep" }
    ]
  },
  pitta: {
    morning: [
      { time: "5:30 AM", activity: "Wake up" },
      { time: "6:00 AM", activity: "Cool/moderate exercise" },
      { time: "7:00 AM", activity: "Meditation and breathing" },
      { time: "7:30 AM", activity: "Refreshing breakfast" },
      { time: "8:30 AM", activity: "Begin focused work" }
    ],
    afternoon: [
      { time: "12:00 PM", activity: "Moderate lunch" },
      { time: "1:00 PM", activity: "Relaxing walk in shade" },
      { time: "3:00 PM", activity: "Cool beverage break" },
      { time: "4:00 PM", activity: "Productive work period" }
    ],
    evening: [
      { time: "6:30 PM", activity: "Light dinner" },
      { time: "7:30 PM", activity: "Mild entertainment" },
      { time: "9:00 PM", activity: "Cool down routine" },
      { time: "9:30 PM", activity: "Relaxation practice" },
      { time: "10:30 PM", activity: "Sleep" }
    ]
  },
  kapha: {
    morning: [
      { time: "5:00 AM", activity: "Wake up early" },
      { time: "5:30 AM", activity: "Vigorous exercise" },
      { time: "7:00 AM", activity: "Energizing meditation" },
      { time: "7:30 AM", activity: "Light breakfast" },
      { time: "8:00 AM", activity: "Begin dynamic work" }
    ],
    afternoon: [
      { time: "12:00 PM", activity: "Light lunch" },
      { time: "1:00 PM", activity: "Brisk walk" },
      { time: "3:00 PM", activity: "Stimulating activity" },
      { time: "4:30 PM", activity: "Active work or exercise" }
    ],
    evening: [
      { time: "5:30 PM", activity: "Light dinner" },
      { time: "6:30 PM", activity: "Evening activity or hobby" },
      { time: "8:00 PM", activity: "Light reading or socializing" },
      { time: "9:00 PM", activity: "Prepare for bed" },
      { time: "9:30 PM", activity: "Sleep" }
    ]
  }
};
