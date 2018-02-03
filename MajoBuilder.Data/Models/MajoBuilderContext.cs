using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MajoBuilder.Data.Models
{
    public partial class MajoBuilderContext : DbContext
    {
        public virtual DbSet<DatabaseConnection> DatabaseConnection { get; set; }
        public virtual DbSet<MigrationLog> MigrationLog { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DatabaseConnection>(entity =>
            {
                entity.Property(e => e.DatabaseConnectionId)
                    .HasColumnName("DatabaseConnectionID")
                    .ValueGeneratedNever();

                entity.Property(e => e.DatabaseConnectionName)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.DatabaseConnectionString).IsRequired();
            });

            modelBuilder.Entity<MigrationLog>(entity =>
            {
                entity.HasKey(e => new { e.MigrationId, e.CompleteDt, e.ScriptChecksum });

                entity.ToTable("__MigrationLog");

                entity.HasIndex(e => e.CompleteDt)
                    .HasName("IX___MigrationLog_CompleteDt");

                entity.HasIndex(e => e.SequenceNo)
                    .HasName("UX___MigrationLog_SequenceNo")
                    .IsUnique();

                entity.HasIndex(e => e.Version)
                    .HasName("IX___MigrationLog_Version");

                entity.Property(e => e.MigrationId).HasColumnName("migration_id");

                entity.Property(e => e.CompleteDt).HasColumnName("complete_dt");

                entity.Property(e => e.ScriptChecksum)
                    .HasColumnName("script_checksum")
                    .HasMaxLength(64);

                entity.Property(e => e.AppliedBy)
                    .IsRequired()
                    .HasColumnName("applied_by")
                    .HasMaxLength(100);

                entity.Property(e => e.Deployed)
                    .HasColumnName("deployed")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.PackageVersion)
                    .HasColumnName("package_version")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ReleaseVersion)
                    .HasColumnName("release_version")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ScriptFilename)
                    .IsRequired()
                    .HasColumnName("script_filename")
                    .HasMaxLength(255);

                entity.Property(e => e.SequenceNo)
                    .HasColumnName("sequence_no")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Version)
                    .HasColumnName("version")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
