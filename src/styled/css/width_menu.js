import { getContext } from '../../hooks/UserContext';

export function widthMenu() {
  const { states } = getContext();

  return states.menuOpen ? 'calc( var( --size-icon ) + var( --openingTrack ) )'
    : 'calc( var( --size-icon ) + calc( 2 * var(--padding-menu ) ) )';
}
