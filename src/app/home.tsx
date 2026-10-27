import { Feather, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Beranda');
  const [waterCount, setWaterCount] = useState(6);

  const tambahAir = () => {
    if (waterCount < 8) {
      setWaterCount(waterCount + 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Konten yang bisa di scroll */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="flex-1 px-6 pt-4">
        {/* bagian header atas */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center gap-2">
            <View className="bg-orange-500 w-10 h-10 rounded-full items-center justify-center">
              <Feather name="zap" size={20} color="white" />
            </View>
            <Text className="text-2xl font-bold text-slate-800">
              FIT<Text className="text-orange-500">FLOW</Text>
            </Text>
          </View>

          <View className="flex-row items-center gap-2">
            <View className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
              <Text className="text-slate-500 font-bold text-xs">ID</Text>
            </View>
            <View className="bg-slate-200 w-9 h-9 rounded-full items-center justify-center">
              <Feather name="user" size={18} color="#64748b" />
            </View>
          </View>
        </View>

        {/* sapaan user and streak */}
        <View className="flex-row justify-between items-center mb-5">
          <View>
            <Text className="text-slate-400 font-medium text-xs mb-1">Selamat Pagi,</Text>
            <Text className="text-2xl font-extrabold text-slate-900">Halo, Adnaan! 👋</Text>
          </View>
          <View className="bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full flex-row items-center gap-1.5 shadow-sm">
            <Feather name="zap" size={14} color="#f97316" />
            <Text className="text-orange-500 font-bold text-xs">5 Hari</Text>
          </View>
        </View>

        {/* banner target oranye */}
        <View className="bg-orange-500 rounded-3xl p-5 mb-6 relative overflow-hidden shadow-lg shadow-orange-200">
          {/* hiasan buletan samar */}
          <View className="absolute -right-6 -top-6 w-36 h-36 bg-orange-400/30 rounded-full" />
          <View className="absolute right-12 -bottom-10 w-28 h-28 bg-orange-600/20 rounded-full" />

          <Text className="text-white/80 font-bold text-[11px] uppercase tracking-wider mb-1">
            TARGET HARI INI
          </Text>

          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-1 pr-2">
              <Text className="text-3xl font-extrabold text-white mb-2">75% Tercapai!</Text>
              <Text className="text-white/90 text-xs leading-5">
                Tinggal 350 kalori lagi untuk mencapai target harianmu.
              </Text>
            </View>

            {/* icon orang sepedaan */}
            <View className="items-center justify-center pl-2">
              <Ionicons name="bicycle" size={58} color="white" />
            </View>
          </View>

          {/* progress bar putih */}
          <View className="bg-orange-600/50 h-3 rounded-full overflow-hidden mb-2">
            <View className="bg-white h-full rounded-full w-[75%]" />
          </View>

          {/* info kalori bawah */}
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-bold text-xs">1,260 / 1,680 Kcal</Text>
            <Text className="text-white/80 font-medium text-xs">Target: 2,000 Kcal</Text>
          </View>
        </View>

        {/* judul statistik */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-bold text-slate-900">Statistik Hari Ini</Text>
          <Text className="text-xs text-slate-400">Pembaruan: Baru saja</Text>
        </View>

        {/* grid statistik 4 kotak */}
        <View className="flex-row flex-wrap justify-between gap-y-3 mb-6">
          {/* Kotak 1: Kalori */}
          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[11px] font-bold text-slate-400 uppercase">KALORI</Text>
              <View className="bg-orange-50 w-7 h-7 rounded-lg items-center justify-center">
                <Ionicons name="flame" size={16} color="#f97316" />
              </View>
            </View>
            <View className="flex-row items-baseline gap-1 mb-1">
              <Text className="text-2xl font-extrabold text-slate-900">420</Text>
              <Text className="text-xs text-slate-400 font-medium">kcal</Text>
            </View>
            <Text className="text-[11px] font-semibold text-emerald-500">↑ 12% dari kemarin</Text>
          </View>

          {/* Kotak 2: Langkah */}
          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[11px] font-bold text-slate-400 uppercase">LANGKAH</Text>
              <View className="bg-blue-50 w-7 h-7 rounded-lg items-center justify-center">
                <Feather name="trending-up" size={15} color="#3b82f6" />
              </View>
            </View>
            <View className="flex-row items-baseline gap-1 mb-1">
              <Text className="text-2xl font-extrabold text-slate-900">6,240</Text>
              <Text className="text-xs text-slate-400 font-medium">step</Text>
            </View>
            <Text className="text-[11px] font-semibold text-blue-500">Target 8,000 langkah</Text>
          </View>

          {/* Kotak 3: Waktu Aktif */}
          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[11px] font-bold text-slate-400 uppercase">WAKTU AKTIF</Text>
              <View className="bg-emerald-50 w-7 h-7 rounded-lg items-center justify-center">
                <Feather name="clock" size={15} color="#10b981" />
              </View>
            </View>
            <View className="flex-row items-baseline gap-1 mb-1">
              <Text className="text-2xl font-extrabold text-slate-900">45</Text>
              <Text className="text-xs text-slate-400 font-medium">Menit</Text>
            </View>
            <Text className="text-[11px] font-semibold text-emerald-500">Target harian tercapai</Text>
          </View>

          {/* Kotak 4: Air Minum */}
          <View className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[11px] font-bold text-slate-400 uppercase">AIR MINUM</Text>
              <View className="bg-cyan-50 w-7 h-7 rounded-lg items-center justify-center">
                <Ionicons name="water" size={16} color="#06b6d4" />
              </View>
            </View>
            <View className="flex-row items-baseline gap-1 mb-1">
              <Text className="text-2xl font-extrabold text-slate-900">1.5</Text>
              <Text className="text-xs text-slate-400 font-medium">L</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-[11px] text-slate-400 font-medium">{waterCount} / 8 Gelas</Text>
              <TouchableOpacity
                onPress={tambahAir}
                className="bg-orange-500 w-6 h-6 rounded-md items-center justify-center"
              >
                <Feather name="plus" size={14} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* list latihan hari ini */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-base font-bold text-slate-900">Latihan Hari Ini</Text>
          <TouchableOpacity>
            <Text className="text-xs font-bold text-orange-500">Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        {/* Latihan 1 */}
        <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3">
          <View className="flex-row items-center gap-3">
            <View className="bg-orange-100 w-12 h-12 rounded-2xl items-center justify-center">
              <Feather name="zap" size={20} color="#f97316" />
            </View>
            <View>
              <Text className="font-bold text-slate-900 text-sm mb-0.5">Full Body HIIT</Text>
              <Text className="text-xs text-slate-400">
                25 Menit • <Text className="text-orange-500 font-semibold">Menengah</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-slate-900 w-9 h-9 rounded-full items-center justify-center">
            <Feather name="play" size={14} color="white" style={{ marginLeft: 2 }} />
          </TouchableOpacity>
        </View>

        {/* Latihan 2 */}
        <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3">
          <View className="flex-row items-center gap-3">
            <View className="bg-blue-50 w-12 h-12 rounded-2xl items-center justify-center">
              <Feather name="check-circle" size={20} color="#3b82f6" />
            </View>
            <View>
              <Text className="font-bold text-slate-900 text-sm mb-0.5">Core & Abs Burn</Text>
              <Text className="text-xs text-slate-400">
                15 Menit • <Text className="text-blue-500 font-semibold">Pemula</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity className="p-1">
            <Feather name="chevron-right" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* bottom navbar bawah */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex-row justify-between items-center shadow-lg">
        {/* Tab Beranda */}
        <TouchableOpacity
          onPress={() => setActiveTab('Beranda')}
          className="items-center justify-center gap-1"
        >
          <Feather
            name="home"
            size={20}
            color={activeTab === 'Beranda' ? '#f97316' : '#94a3b8'}
          />
          <Text
            className={`text-[10px] font-bold ${
              activeTab === 'Beranda' ? 'text-orange-500' : 'text-slate-400'
            }`}
          >
            Beranda
          </Text>
        </TouchableOpacity>

        {/* Tab Eksplor */}
        <TouchableOpacity
          onPress={() => setActiveTab('Eksplor')}
          className="items-center justify-center gap-1"
        >
          <Feather
            name="compass"
            size={20}
            color={activeTab === 'Eksplor' ? '#f97316' : '#94a3b8'}
          />
          <Text
            className={`text-[10px] font-bold ${
              activeTab === 'Eksplor' ? 'text-orange-500' : 'text-slate-400'
            }`}
          >
            Eksplor
          </Text>
        </TouchableOpacity>

        {/* Tab Progres */}
        <TouchableOpacity
          onPress={() => setActiveTab('Progres')}
          className="items-center justify-center gap-1"
        >
          <Feather
            name="bar-chart-2"
            size={20}
            color={activeTab === 'Progres' ? '#f97316' : '#94a3b8'}
          />
          <Text
            className={`text-[10px] font-bold ${
              activeTab === 'Progres' ? 'text-orange-500' : 'text-slate-400'
            }`}
          >
            Progres
          </Text>
        </TouchableOpacity>

        {/* Tab Profil */}
        <TouchableOpacity
          onPress={() => setActiveTab('Profil')}
          className="items-center justify-center gap-1"
        >
          <Feather
            name="user"
            size={20}
            color={activeTab === 'Profil' ? '#f97316' : '#94a3b8'}
          />
          <Text
            className={`text-[10px] font-bold ${
              activeTab === 'Profil' ? 'text-orange-500' : 'text-slate-400'
            }`}
          >
            Profil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
