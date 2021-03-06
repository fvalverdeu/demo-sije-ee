USE [TaskManagementDb]
GO
/****** Object:  Table [dbo].[Tasks]    Script Date: 16/06/2020 02:53:29 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tasks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
	[Status] [int] NOT NULL,
	[DueDate] [datetime] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[DateModified] [datetime] NULL
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Tasks] ON 

INSERT [dbo].[Tasks] ([Id], [Name], [Description], [Status], [DueDate], [DateCreated], [DateModified]) VALUES (1, N'Reunión', N'Primera sesión 8:30 a.m.', 1, CAST(N'2020-06-15 00:00:00.000' AS DateTime), CAST(N'2020-06-15 10:02:19.150' AS DateTime), NULL)
INSERT [dbo].[Tasks] ([Id], [Name], [Description], [Status], [DueDate], [DateCreated], [DateModified]) VALUES (2, N'Presentación', N'Martes 16 8:30 a.m.', 1, CAST(N'2020-06-15 00:00:00.000' AS DateTime), CAST(N'2020-06-15 18:31:49.553' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[Tasks] OFF
