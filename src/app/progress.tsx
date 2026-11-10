import { Feather, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';

export default function Progress() {
  // data statistik mingguan statis
  const riwayatMingguan = [
    { hari: 'Sen', kalori: 420, selesai: true },
    { hari: 'Sel', kalori: 350, selesai: true },
    { hari: 'Rab', kalori: 480, selesai: true },
    { hari: 'Kam', kalori: 290, selesai: true },
    { hari: 'Jum', kalori: 520, selesai: true },
    { hari: 'Sab', kalori: 0, selesai: false },
    { hari: 'Min', kalori: 0, selesai: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Header */}
      <Header title="Progres Latihan" showBack={true} />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} className="flex-1 px-6 pt-5">
        {/* Banner Ringkasan Mingguan */}
        <View className="bg-orange-500 rounded-3xl p-6 mb-6 relative overflow-hidden shadow-lg shadow-orange-200">
          <View className="absolute -right-8 -top-8 w-36 h-36 bg-orange-400/30 rounded-full" />

          <Text className="text-white/80 font-bold text-xs uppercase mb-1">
            RINGKASAN MINGGU INI
          </Text>
          <Text className="text-3xl font-extrabold text-white mb-2">2,060 Kcal</Text>
          <Text className="text-white/90 text-xs mb-4">
            Total 5 sesi latihan diselesaikan minggu ini. Keren! 🔥
          </Text>

          {/* Baris Hari Mingguan */}
          <View className="flex-row justify-between pt-4 border-t border-white/20">
            {riwayatMingguan.map((item, index) => (
              <View key={index} className="items-center gap-1.5">
                <View
                  className={`w-8 h-8 rounded-full items-center justify-center ${
                    item.selesai ? 'bg-white' : 'bg-orange-600/50'
                  }`}
                >
                  <Feather
                    name={item.selesai ? 'check' : 'minus'}
                    size={14}
                    color={item.selesai ? '#f97316' : 'white'}
                  />
                </View>
                <Text className="text-[11px] font-bold text-white">{item.hari}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 2 Kotak Pencapaian */}
        <Text className="text-base font-bold text-slate-900 mb-3">Pencapaian Bulan Ini</Text>
        <View className="flex-row justify-between mb-6">
          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="w-10 h-10 rounded-xl bg-orange-50 items-center justify-center mb-3">
              <Ionicons name="flame" size={20} color="#f97316" />
            </View>
            <Text className="text-2xl font-extrabold text-slate-900 mb-0.5">14.2k</Text>
            <Text className="text-xs text-slate-400">Total Kalori Terbakar</Text>
          </View>

          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center mb-3">
              <Feather name="award" size={20} color="#3b82f6" />
            </View>
            <Text className="text-2xl font-extrabold text-slate-900 mb-0.5">18 Sesi</Text>
            <Text className="text-xs text-slate-400">Latihan Selesai</Text>
          </View>
        </View>

        {/* Riwayat Aktivitas Terakhir */}
        <Text className="text-base font-bold text-slate-900 mb-3">Aktivitas Terakhir</Text>

        <View className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-xl bg-emerald-50 items-center justify-center">
              <Feather name="check-circle" size={18} color="#10b981" />
            </View>
            <View>
              <Text className="font-bold text-slate-800 text-sm">Full Body HIIT</Text>
              <Text className="text-xs text-slate-400">Hari ini • 25 Menit</Text>
            </View>
          </View>
          <Text className="font-extrabold text-sm text-orange-500">+320 kcal</Text>
        </View>

        <View className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center">
              <Feather name="check-circle" size={18} color="#3b82f6" />
            </View>
            <View>
              <Text className="font-bold text-slate-800 text-sm">Core & Abs Burn</Text>
              <Text className="text-xs text-slate-400">Kemarin • 15 Menit</Text>
            </View>
          </View>
          <Text className="font-extrabold text-sm text-blue-500">+180 kcal</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

