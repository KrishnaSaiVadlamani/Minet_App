import { useCoinDataHook} from "./hooks";
import { renderHook, act } from "@testing-library/react";

describe("useCoinDataHook", () => {
  it("should correctly sort and filter the coin data", () => {
    const { result } = renderHook(() => useCoinDataHook("", "watchlist"));
    act(() => {
      result.current.handleMarketCapClick();
    });
    expect(result.current.sortOrder).toBe("ascending");
    expect(result.current.coinData).toHaveLength(0);

    act(() => {
      result.current.handleMarketCapClick();
    });
    expect(result.current.sortOrder).toBe("descending");
    expect(result.current.coinData).toHaveLength(0);
  });
});
