import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import WorkoutCard from '../components/WorkoutCard';
import { WorkoutItem, workoutList } from '../data/workouts';

export default function Explore() {
  const [search, setSearch] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('Semua');

  const kategoriList = ['Semua', 'Pemula', 'Menengah', 'Kardio', 'Relaksasi'];

  // filter latihan simpel berdasarkan search & kategori
  const filteredWorkouts = workoutList.filter((item) => {
    const cocokNama = item.title.toLowerCase().includes(search.toLowerCase());
    const cocokKategori =
      selectedKategori === 'Semua' || item.category === selectedKategori;
    return cocokNama && cocokKategori;
  });

  const bukaDetail = (item: WorkoutItem) => {
    router.push({
      pathname: '/detail' as any,
      params: {
        id: item.id,
        title: item.title,
        category: item.category,
        duration: item.duration,
        calories: item.calories,
        desc: item.desc,
        icon: item.icon,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Header */}
      <Header title="Eksplor Latihan" showBack={true} />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} className="flex-1 px-6 pt-4">
        {/* Search Bar */}
        <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14 mb-4">
          <Feather name="search" size={20} color="#94a3b8" />
          <TextInput
            className="flex-1 text-slate-900 text-base ml-3"
            placeholder="Cari program latihan..."
            placeholderTextColor="#94a3b8"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Feather name="x" size={18} color="#94a3b8" />
            </TouchableOpacity>
          )}
        </View>

        {/* Tab Filter Kategori */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row mb-6 -mx-1"
        >
          {kategoriList.map((kat) => (
            <TouchableOpacity
              key={kat}
              onPress={() => setSelectedKategori(kat)}
              className={`px-4 py-2 rounded-full mr-2 ${
                selectedKategori === kat
                  ? 'bg-orange-500'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <Text
                className={`text-xs font-bold ${
                  selectedKategori === kat ? 'text-white' : 'text-slate-600'
                }`}
              >
                {kat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Daftar Hasil */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-base font-bold text-slate-900">Program Tersedia</Text>
          <Text className="text-xs text-slate-400">{filteredWorkouts.length} Latihan</Text>
        </View>

        {filteredWorkouts.length === 0 ? (
          <View className="bg-white rounded-2xl p-8 items-center justify-center border border-slate-100 my-4">
            <Feather name="inbox" size={36} color="#cbd5e1" />
            <Text className="text-slate-400 font-bold text-sm mt-2">
              Tidak ada latihan yang cocok
            </Text>
          </View>
        ) : (
          filteredWorkouts.map((item) => (
            <WorkoutCard
              key={item.id}
              item={item}
              onPress={() => bukaDetail(item)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

