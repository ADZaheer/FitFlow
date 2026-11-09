import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Profile() {
  const [notifAktif, setNotifAktif] = useState(true);
  const [pengingatAir, setPengingatAir] = useState(true);

  const handleLogout = () => {
    Alert.alert('Keluar Akun', 'Apakah kamu yakin ingin keluar dari aplikasi?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Keluar',
        style: 'destructive',
        onPress: () => router.replace('/' as any),
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Header atas */}
      <View className="px-6 pt-4 pb-3 flex-row justify-between items-center bg-white border-b border-slate-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center"
        >
          <Feather name="arrow-left" size={20} color="#334155" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-slate-800">Profil Saya</Text>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center">
          <Feather name="edit-2" size={17} color="#64748b" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }} className="flex-1 px-6 pt-6">
        {/* Foto & Info Utama */}
        <View className="items-center mb-6">
          <View className="relative mb-3">
            <View className="w-24 h-24 rounded-full bg-orange-100 border-4 border-white shadow-sm items-center justify-center">
              <Feather name="user" size={44} color="#f97316" />
            </View>
            <View className="absolute bottom-0 right-0 bg-orange-500 w-7 h-7 rounded-full items-center justify-center border-2 border-white">
              <Feather name="check" size={14} color="white" />
            </View>
          </View>
          <Text className="text-xl font-extrabold text-slate-900 mb-0.5">Adnaan Zaheer</Text>
          <Text className="text-xs text-slate-400">adnaan@fitflow.app • Member Pro</Text>
        </View>

        {/* 3 Statistik Fisik Statis */}
        <View className="flex-row justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6">
          <View className="items-center flex-1 border-r border-slate-100">
            <Text className="text-[11px] font-bold text-slate-400 uppercase mb-1">BERAT</Text>
            <Text className="text-lg font-extrabold text-slate-800">68 <Text className="text-xs font-normal text-slate-400">kg</Text></Text>
          </View>
          <View className="items-center flex-1 border-r border-slate-100">
            <Text className="text-[11px] font-bold text-slate-400 uppercase mb-1">TINGGI</Text>
            <Text className="text-lg font-extrabold text-slate-800">175 <Text className="text-xs font-normal text-slate-400">cm</Text></Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-[11px] font-bold text-slate-400 uppercase mb-1">TARGET</Text>
            <Text className="text-lg font-extrabold text-orange-500">4x <Text className="text-xs font-normal text-slate-400">/mgg</Text></Text>
          </View>
        </View>

        {/* Card Target Kesehatan */}
        <View className="bg-orange-500 rounded-2xl p-5 mb-6 shadow-md shadow-orange-200">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-white font-extrabold text-sm">Status Kebugaran</Text>
            <View className="bg-white/20 px-2.5 py-0.5 rounded-full">
              <Text className="text-white text-[11px] font-bold">Ideal</Text>
            </View>
          </View>
          <Text className="text-white/90 text-xs leading-5">
            Indeks massa tubuhmu berada di batas normal. Pertahankan konsistensi latihan 3–4 kali seminggu.
          </Text>
        </View>

        {/* Menu Pengaturan Sederhana */}
        <View className="mb-6">
          <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Preferensi Aplikasi
          </Text>

          {/* Toggle Notifikasi */}
          <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center">
                <Feather name="bell" size={18} color="#3b82f6" />
              </View>
              <View>
                <Text className="font-bold text-slate-800 text-sm">Pengingat Latihan</Text>
                <Text className="text-xs text-slate-400">Notifikasi jadwal harian</Text>
              </View>
            </View>
            <Switch
              value={notifAktif}
              onValueChange={setNotifAktif}
              trackColor={{ false: '#cbd5e1', true: '#f97316' }}
            />
          </View>

          {/* Toggle Air Minum */}
          <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between border border-slate-100 shadow-sm mb-3">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-cyan-50 items-center justify-center">
                <Feather name="droplet" size={18} color="#06b6d4" />
              </View>
              <View>
                <Text className="font-bold text-slate-800 text-sm">Target Air Minum</Text>
                <Text className="text-xs text-slate-400">Pengingat 8 gelas per hari</Text>
              </View>
            </View>
            <Switch
              value={pengingatAir}
              onValueChange={setPengingatAir}
              trackColor={{ false: '#cbd5e1', true: '#f97316' }}
            />
          </View>
        </View>

        {/* Tombol Logout */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-50 border border-red-100 rounded-2xl h-14 flex-row items-center justify-center gap-2 mb-4"
        >
          <Feather name="log-out" size={18} color="#ef4444" />
          <Text className="text-red-500 font-bold text-base">Keluar Akun</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

