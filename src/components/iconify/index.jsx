import { Icon } from '@iconify/react';
export default function Iconify({ icon, className = '' }) {
  return (
    <Icon icon={icon} className={className} />
  )
}
