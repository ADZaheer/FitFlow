import { Feather } from '@expo/vector-icons';
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

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const Login = () => {
    console.log('Login data:', { email, password });
  };

  const TogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        {/* the round thingy  */}
        <View className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-bl-full -z-10" />

        <View className="px-6 pt-12 pb-6">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-10">
            <View className="flex-row items-center gap-2">
              <View className="bg-orange-500 w-10 h-10 rounded-full items-center justify-center">
                <Feather name="zap" size={20} color="white" />
              </View>
              <Text className="text-2xl font-bold text-slate-800">
                FIT<Text className="text-orange-500">FLOW</Text>
              </Text>
            </View>
            <View className="bg-white px-3 py-1.5 rounded-full shadow-sm">
              <Text className="text-slate-500 font-bold text-xs">ID</Text>
            </View>
          </View>

          {/* LoGo */}
          <View className="bg-orange-100 self-start px-4 py-1.5 rounded-full mb-4">
            <Text className="text-orange-500 font-bold text-xs uppercase">
              Mulai Bergerak
            </Text>
          </View>

          {/* TITLWESS */}
          <Text className="text-4xl font-extrabold text-slate-900 mb-1">
            Selamat Datang
          </Text>
          <Text className="text-4xl font-extrabold text-orange-500 mb-4">
            Kembali!
          </Text>
          <Text className="text-slate-500 text-base leading-6 mb-8 pr-4">
            Lanjutkan progres olahragamu dan capai target tubuh bugar hari ini.
          </Text>

          {/* tutorial ahh info */}
          <View className="bg-slate-100 rounded-2xl p-4 flex-row items-center mb-8 gap-4">
            <View className="bg-blue-500 w-12 h-12 rounded-xl items-center justify-center">
              <Feather name="target" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-bold text-slate-900 mb-1">
                Siap melampaui target?
              </Text>
              <Text className="text-slate-500 text-xs">
                15,480+ pengguna aktif berolahraga sekarang
              </Text>
            </View>
          </View>

          {/* Formm naruh email and pass */}
          <View className="mb-5">
            <Text className="text-slate-900 font-bold mb-2 text-xs uppercase">
              Nama Pengguna
            </Text>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14">
              <Feather name="user" size={20} color="#94a3b8" />
              <TextInput
                className="flex-1 text-slate-900 text-base ml-3"
                placeholder="nama_kamu atau email"
                placeholderTextColor="#94a3b8"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="mb-10">
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-900 font-bold text-xs uppercase">
                Kata Sandi
              </Text>
              <TouchableOpacity>
                <Text className="text-orange-500 font-bold text-xs">
                  Lupa Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14">
              <Feather name="lock" size={20} color="#94a3b8" />
              <TextInput
                className="flex-1 text-slate-900 text-base ml-3"
                placeholder="Minimal 8 karakter"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={TogglePassword} className="p-1">
                <Feather
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#94a3b8"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Submittt */}
          <TouchableOpacity
            onPress={Login}
            className="bg-orange-500 rounded-2xl h-14 flex-row items-center justify-center gap-2 shadow-md shadow-orange-200"
          >
            <Text className="text-white font-bold text-lg">Masuk Sekarang</Text>
            <Feather name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}