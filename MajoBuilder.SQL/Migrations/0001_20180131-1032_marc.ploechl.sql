-- <Migration ID="1c96e417-d337-4c3c-b927-81d2745a7770" />
GO

PRINT N'Creating [dbo].[DatabaseConnection]'
GO
CREATE TABLE [dbo].[DatabaseConnection]
(
[DatabaseConnectionID] [uniqueidentifier] NOT NULL,
[DatabaseConnectionName] [nvarchar] (255) NOT NULL,
[DatabaseConnectionString] [nvarchar] (max) NOT NULL
)
GO
PRINT N'Creating primary key [PK_DatabaseConnection] on [dbo].[DatabaseConnection]'
GO
ALTER TABLE [dbo].[DatabaseConnection] ADD CONSTRAINT [PK_DatabaseConnection] PRIMARY KEY CLUSTERED  ([DatabaseConnectionID])
GO
