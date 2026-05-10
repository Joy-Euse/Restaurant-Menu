import { Text, StyleSheet } from 'react-native';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 32 }: LogoProps) {
  return (
    <Text style={[styles.logo, { fontSize: size }]}>
      <Text style={styles.supaText}>Supa</Text>
      <Text style={styles.menuText}>Menu</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  supaText: {
    color: '#000000',
  },
  menuText: {
    color: '#f97316',
  },
});
