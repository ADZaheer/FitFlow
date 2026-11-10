import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof Feather.glyphMap;
  variant?: 'orange' | 'green' | 'red';
}

// tombol utama yang dipakai di login, detail latihan, dsb
export default function PrimaryButton({
  title,
  onPress,
  iconName = 'arrow-right',
  variant = 'orange',
}: PrimaryButtonProps) {
  const getBgColor = () => {
    if (variant === 'green') return 'bg-emerald-500 shadow-emerald-200';
    if (variant === 'red') return 'bg-red-500 shadow-red-200';
    return 'bg-orange-500 shadow-orange-200';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${getBgColor()} rounded-2xl h-14 flex-row items-center justify-center gap-2 shadow-md`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
      {iconName && <Feather name={iconName} size={18} color="white" />}
    </TouchableOpacity>
  );
}

