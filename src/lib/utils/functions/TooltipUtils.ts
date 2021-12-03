import { debounce } from 'lodash-es'
import ReactTooltip from 'react-tooltip'

/**
 * Rebuilds the global instance of ReactTooltip. Utilizes lodash's `debounce` to throttle/prevent unnecessary rebuilds.
 *
 * Borrowed from: https://github.com/wwayne/react-tooltip/issues/300#issuecomment-468042592
 */
export const rebuildTooltip = debounce(() => ReactTooltip.rebuild(), 200, {
  leading: false,
  trailing: true,
})
