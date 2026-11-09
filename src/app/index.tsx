import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    // validasi simpel
    if (isRegister && !name.trim()) {
      Alert.alert('Perhatian', 'Nama lengkap wajib diisi ya');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Perhatian', 'Email / Username tidak boleh kosong');
      return;
    }

    if (!password) {
      Alert.alert('Perhatian', 'Kata sandi wajib diisi');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Perhatian', 'Kata sandi minimal 6 karakter');
      return;
    }

    console.log(isRegister ? 'Register data:' : 'Login data:', { name, email, password });
    router.push('/home' as any);
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
              {isRegister ? 'Mulai Bergabung' : 'Mulai Bergerak'}
            </Text>
          </View>

          {/* TITLWESS */}
          <Text className="text-4xl font-extrabold text-slate-900 mb-1">
            {isRegister ? 'Buat Akun' : 'Selamat Datang'}
          </Text>
          <Text className="text-4xl font-extrabold text-orange-500 mb-4">
            {isRegister ? 'Baru!' : 'Kembali!'}
          </Text>
          <Text className="text-slate-500 text-base leading-6 mb-6 pr-4">
            {isRegister
              ? 'Daftar sekarang untuk mulai mencatat target latihan dan hidup lebih sehat.'
              : 'Lanjutkan progres olahragamu dan capai target tubuh bugar hari ini.'}
          </Text>

          {/* Tab switch Login / Register */}
          <View className="flex-row bg-slate-200/70 p-1 rounded-2xl mb-6">
            <TouchableOpacity
              onPress={() => setIsRegister(false)}
              className={`flex-1 py-2.5 rounded-xl items-center ${!isRegister ? 'bg-white shadow-sm' : ''
                }`}
            >
              <Text
                className={`font-bold text-sm ${!isRegister ? 'text-slate-900' : 'text-slate-500'
                  }`}
              >
                Masuk
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsRegister(true)}
              className={`flex-1 py-2.5 rounded-xl items-center ${isRegister ? 'bg-white shadow-sm' : ''
                }`}
            >
              <Text
                className={`font-bold text-sm ${isRegister ? 'text-slate-900' : 'text-slate-500'
                  }`}
              >
                Daftar
              </Text>
            </TouchableOpacity>
          </View>

          {/* Formm naruh nama kalau register */}
          {isRegister && (
            <View className="mb-5">
              <Text className="text-slate-900 font-bold mb-2 text-xs uppercase">
                Nama Lengkap
              </Text>
              <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14">
                <Feather name="smile" size={20} color="#94a3b8" />
                <TextInput
                  className="flex-1 text-slate-900 text-base ml-3"
                  placeholder="Nama lengkap kamu"
                  placeholderTextColor="#94a3b8"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
          )}

          {/* Formm naruh email and pass */}
          <View className="mb-5">
            <Text className="text-slate-900 font-bold mb-2 text-xs uppercase">
              {isRegister ? 'Email' : 'Nama Pengguna / Email'}
            </Text>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14">
              <Feather name="user" size={20} color="#94a3b8" />
              <TextInput
                className="flex-1 text-slate-900 text-base ml-3"
                placeholder={isRegister ? 'contoh@email.com' : 'nama_kamu atau email'}
                placeholderTextColor="#94a3b8"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="mb-8">
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-900 font-bold text-xs uppercase">
                Kata Sandi
              </Text>
              {!isRegister && (
                <TouchableOpacity>
                  <Text className="text-orange-500 font-bold text-xs">
                    Lupa Password?
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 h-14">
              <Feather name="lock" size={20} color="#94a3b8" />
              <TextInput
                className="flex-1 text-slate-900 text-base ml-3"
                placeholder="Minimal 6 karakter"
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
            onPress={handleAuth}
            className="bg-orange-500 rounded-2xl h-14 flex-row items-center justify-center gap-2 shadow-md shadow-orange-200"
          >
            <Text className="text-white font-bold text-lg">
              {isRegister ? 'Daftar Sekarang' : 'Masuk Sekarang'}
            </Text>
            <Feather name="arrow-right" size={20} color="white" />
          </TouchableOpacity>

          {/* text link bawah */}
          <View className="flex-row justify-center items-center mt-6">
            <Text className="text-slate-500 text-sm">
              {isRegister ? 'Sudah punya akun? ' : 'Belum punya akun? '}
            </Text>
            <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
              <Text className="text-orange-500 font-bold text-sm">
                {isRegister ? 'Masuk di sini' : 'Daftar gratis'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}