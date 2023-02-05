import mysql.connector
from contextlib import contextmanager
from config import configs


@contextmanager
def mysql_connect():
    """Context manager function to make mysql db connection and automatically close it."""
    conn = mysql.connector.connect(
        host=configs.get("MYSQL_HOST"),
        user=configs.get("MYSQL_DB_USER"),
        password=configs.get("MYSQL_DB_PASSWORD"),
        database=configs.get("MYSQL_DB"),
        # auth_plugin="mysql_native_password",
    )
    try:
        yield conn
    finally:
        conn.close()
