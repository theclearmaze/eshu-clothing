'use client';

import { useState } from 'react';
import { SizeGuide } from '@/components/size-guide';

export function ProductCommerce({ availableSizes, inventory, sizeChartId }: { availableSizes: string[]; inventory?: number; sizeChartId: string }) {
  const [size, setSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const soldOut = inventory === 0;
  return <div className="commerce-controls">
    <div className="availability"><span>{soldOut ? 'Sold out' : inventory == null ? 'Availability TBA' : 'Available'}</span><span>{inventory == null ? 'Inventory TBA' : `${inventory} pieces`}</span></div>
    <fieldset disabled={soldOut}><legend>Size</legend><div className="size-options">{availableSizes.map((value) => <button type="button" className={size === value ? 'selected' : ''} onClick={() => setSize(value)} key={value} aria-pressed={size === value}>{value}</button>)}</div></fieldset>
    <SizeGuide sizeChartId={sizeChartId} />
    <label className="quantity-field">Quantity<input type="number" min="1" max={inventory && inventory > 0 ? inventory : undefined} value={quantity} disabled={soldOut} onChange={(event) => setQuantity(Math.max(1, inventory == null ? Number(event.target.value) : Math.min(inventory, Number(event.target.value))))} /></label>
    <button className="add-to-bag" type="button" disabled={soldOut} onClick={() => setMessage(`${quantity} × size ${size} added to bag`)}>{soldOut ? 'Sold out' : 'Add to bag'}</button>
    <p className="commerce-message" aria-live="polite">{message}</p>
  </div>;
}
