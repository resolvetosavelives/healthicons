import { PackagePage } from '../../components/PackagePage';
import { PACKAGES } from '../../lib/packages';

export default function VuePackage() {
  return <PackagePage info={PACKAGES.find((info) => info.slug === 'vue')} />;
}
