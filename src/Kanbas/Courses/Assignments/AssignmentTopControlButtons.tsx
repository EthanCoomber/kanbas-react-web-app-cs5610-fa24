import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import { FaPlus } from 'react-icons/fa6';
export default function AssignmentTopControlButtons() {
  return (
    <div className="float-end">
      <span className="me-3 border rounded border-dark p-1">40% of Total</span>
      <FaPlus className="me-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
