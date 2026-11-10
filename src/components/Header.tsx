import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightIcon?: keyof typeof Feather.glyphMap;
  onRightPress?: () => void;
}

// komponen header atas yang bisa dipakai di banyak layar
export default function Header({
  title,
  showBack = true,
  rightIcon,
  onRightPress,
}: HeaderProps) {
  return (
    <View className="px-6 pt-4 pb-3 flex-row justify-between items-center bg-white border-b border-slate-100">
      {showBack ? (
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center"
        >
          <Feather name="arrow-left" size={20} color="#334155" />
        </TouchableOpacity>
      ) : (
        <View className="w-10 h-10" />
      )}

      <Text className="text-base font-bold text-slate-800">{title}</Text>

      {rightIcon ? (
        <TouchableOpacity
          onPress={onRightPress}
          className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center"
        >
          <Feather name={rightIcon} size={18} color="#64748b" />
        </TouchableOpacity>
      ) : (
        <View className="w-10 h-10" />
      )}
    </View>
  );
}

