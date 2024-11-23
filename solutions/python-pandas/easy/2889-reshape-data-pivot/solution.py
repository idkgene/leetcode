import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    pivoted_table = weather.pivot(index='month',columns='city',values='temperature')
    return pivoted_table
