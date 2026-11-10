import { Feather, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import { defaultGerakan } from '../data/workouts';

export default function Detail() {
  const params = useLocalSearchParams();
  const [isStarted, setIsStarted] = useState(false);

  // fallback data kalau dibuka langsung tanpa params
  const title = (params.title as string) || 'Full Body HIIT';
  const category = (params.category as string) || 'Menengah';
  const duration = (params.duration as string) || '25 Menit';
  const calories = (params.calories as string) || '320 kcal';
  const desc =
    (params.desc as string) ||
    'Latihan intensitas tinggi untuk membakar lemak seluruh tubuh dan meningkatkan stamina.';
  const iconName = (params.icon as any) || 'zap';

  const handleStart = () => {
    setIsStarted(true);
    Alert.alert('Latihan Dimulai! 🔥', `Selamat berolahraga untuk sesi ${title}. Jangan lupa siapkan air minum.`);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Bagian Header Reusable */}
      <Header title="Detail Latihan" rightIcon="bookmark" />

      <ScrollView contentContainerStyle={{ paddingBottom: 110 }} className="flex-1 px-6 pt-5">
        {/* Banner Kartu Latihan */}
        <View className="bg-orange-500 rounded-3xl p-6 mb-6 relative overflow-hidden shadow-lg shadow-orange-200">
          <View className="absolute -right-8 -top-8 w-36 h-36 bg-orange-400/30 rounded-full" />

          <View className="bg-white/20 self-start px-3 py-1 rounded-full mb-3">
            <Text className="text-white font-bold text-xs uppercase">{category}</Text>
          </View>

          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-12 h-12 bg-white rounded-2xl items-center justify-center shadow-sm">
              <Feather name={iconName} size={24} color="#f97316" />
            </View>
            <View className="flex-1">
              <Text className="text-2xl font-extrabold text-white">{title}</Text>
              <Text className="text-white/80 text-xs">Program Latihan Harian</Text>
            </View>
          </View>

          {/* info durasi & kalori */}
          <View className="flex-row gap-4 pt-3 border-t border-white/20">
            <View className="flex-row items-center gap-1.5">
              <Feather name="clock" size={14} color="white" />
              <Text className="text-white font-bold text-xs">{duration}</Text>
            </View>
            <View className="flex-row items-center gap-1.5">
              <Ionicons name="flame" size={15} color="white" />
              <Text className="text-white font-bold text-xs">{calories}</Text>
            </View>
          </View>
        </View>

        {/* Deskripsi */}
        <View className="mb-6">
          <Text className="text-base font-bold text-slate-900 mb-2">Tentang Latihan</Text>
          <Text className="text-slate-500 text-sm leading-6">{desc}</Text>
        </View>

        {/* Daftar Gerakan */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-slate-900">Rangkaian Gerakan</Text>
            <Text className="text-xs text-slate-400">{defaultGerakan.length} Gerakan</Text>
          </View>

          {defaultGerakan.map((item, index) => (
            <View
              key={index}
              className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3"
            >
              <View className="flex-row items-center gap-3.5">
                <View className="w-10 h-10 rounded-xl bg-orange-50 items-center justify-center">
                  <Text className="text-orange-500 font-extrabold text-sm">{item.no}</Text>
                </View>
                <View>
                  <Text className="font-bold text-slate-800 text-sm mb-0.5">{item.name}</Text>
                  <Text className="text-xs text-slate-400">
                    {item.time} • {item.reps}
                  </Text>
                </View>
              </View>
              <View className="w-8 h-8 rounded-full bg-slate-50 items-center justify-center">
                <Feather name="play" size={12} color="#f97316" style={{ marginLeft: 2 }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Tombol Mulai di Bawah Reusable */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-lg">
        <PrimaryButton
          title={isStarted ? 'Latihan Sedang Berjalan' : 'Mulai Latihan Sekarang'}
          onPress={handleStart}
          iconName={isStarted ? 'check-circle' : 'play'}
          variant={isStarted ? 'green' : 'orange'}
        />
      </View>
    </SafeAreaView>
  );
}
