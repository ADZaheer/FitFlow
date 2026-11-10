import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { WorkoutItem } from '../data/workouts';

interface WorkoutCardProps {
  item: WorkoutItem;
  onPress: () => void;
}

// komponen kartu latihan untuk daftar di home
export default function WorkoutCard({ item, onPress }: WorkoutCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3"
    >
      <View className="flex-row items-center gap-3.5 flex-1 pr-2">
        <View className={`${item.bgColor} w-12 h-12 rounded-2xl items-center justify-center`}>
          <Feather name={item.icon as any} size={22} color={item.iconColor} />
        </View>
        <View className="flex-1">
          <Text className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</Text>
          <Text className="text-xs text-slate-400">
            {item.duration} • <Text className={`font-semibold ${item.badgeColor}`}>{item.category}</Text> • {item.calories}
          </Text>
        </View>
      </View>
      <View className="w-8 h-8 rounded-full bg-slate-50 items-center justify-center">
        <Feather name="chevron-right" size={18} color="#94a3b8" />
      </View>
    </TouchableOpacity>
  );
}

