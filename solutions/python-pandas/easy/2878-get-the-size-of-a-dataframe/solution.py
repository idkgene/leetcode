import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    num_rows = len(players.index)
    num_cols = len(players.columns)
    return [num_rows, num_cols]
