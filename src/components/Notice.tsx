export const Notice = ({ text, onConfirm, onClose }: { text: string, onConfirm: () => void, onClose: () => void }) => {
  return <div className="fixed m-auto z-100 h-[200px] w-[300px]">
    <div>
      <div className="text-center">{text}</div>
      <div>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
}