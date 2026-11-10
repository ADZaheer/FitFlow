// kumpulan data statis latihan & gerakan untuk prototipe aplikasi FitFlow

export interface WorkoutItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  calories: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  badgeColor: string;
  desc: string;
}

export const workoutList: WorkoutItem[] = [
  {
    id: '1',
    title: 'Full Body HIIT',
    category: 'Menengah',
    duration: '25 Menit',
    calories: '320 kcal',
    icon: 'zap',
    bgColor: 'bg-orange-100',
    iconColor: '#f97316',
    badgeColor: 'text-orange-500',
    desc: 'Latihan intensitas tinggi untuk membakar lemak seluruh tubuh dan meningkatkan stamina.',
  },
  {
    id: '2',
    title: 'Core & Abs Burn',
    category: 'Pemula',
    duration: '15 Menit',
    calories: '180 kcal',
    icon: 'target',
    bgColor: 'bg-blue-100',
    iconColor: '#3b82f6',
    badgeColor: 'text-blue-500',
    desc: 'Fokus melatih otot perut dan kekuatan inti tubuh dengan gerakan terukur.',
  },
  {
    id: '3',
    title: 'Morning Yoga Flow',
    category: 'Relaksasi',
    duration: '20 Menit',
    calories: '120 kcal',
    icon: 'sun',
    bgColor: 'bg-emerald-100',
    iconColor: '#10b981',
    badgeColor: 'text-emerald-500',
    desc: 'Peregangan tubuh di pagi hari untuk meningkatkan fleksibilitas dan ketenangan.',
  },
  {
    id: '4',
    title: 'Outdoor Cycling',
    category: 'Kardio',
    duration: '40 Menit',
    calories: '450 kcal',
    icon: 'activity',
    bgColor: 'bg-purple-100',
    iconColor: '#8b5cf6',
    badgeColor: 'text-purple-500',
    desc: 'Latihan kayuhan sepeda santai hingga cepat untuk memperkuat daya tahan jantung.',
  },
];

export const defaultGerakan = [
  { no: '01', name: 'Jumping Jacks', time: '45 Detik', reps: '3 Set' },
  { no: '02', name: 'Bodyweight Squats', time: '60 Detik', reps: '3 Set' },
  { no: '03', name: 'Mountain Climbers', time: '45 Detik', reps: '3 Set' },
  { no: '04', name: 'High Knees', time: '30 Detik', reps: '3 Set' },
  { no: '05', name: 'Plank Hold', time: '60 Detik', reps: '2 Set' },
];

