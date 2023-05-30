export default function Modal({ isOpen, onClose, children, title }) {
	return (
		<>
			{isOpen && (
				<div className='modal'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h2 className='modal-title'>{title}</h2>
							<button onClick={onClose} className='button-icon'>
								<span className='material-symbols-outlined'>close</span>
							</button>
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	);
}
