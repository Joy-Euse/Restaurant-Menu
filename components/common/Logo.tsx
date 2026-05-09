import { Text } from 'react-native';

export default function Logo({ size = 'text-4xl' }: { size?: string }) {
  return (
    <Text className={`${size} font-bold text-center`}>
      <Text className="text-black">Supa</Text>
      <Text className="text-orange-500">Menu</Text>
    </Text>
  );
}
