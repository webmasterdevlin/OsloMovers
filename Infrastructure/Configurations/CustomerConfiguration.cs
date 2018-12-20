using ApplicationCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configurations
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.HasKey(c => c.CustomerId);
            builder.Property(c => c.CustomerId)
                .HasColumnName("CustomerID")
                .HasMaxLength(5);
            builder.Property(c => c.FirstName).IsRequired().HasMaxLength(76);
            builder.Property(c => c.LastName).HasMaxLength(40);
            builder.Property(c => c.PhoneNumber).IsRequired().HasMaxLength(12);
            builder.Property(c => c.Email).HasMaxLength(24);
            builder.HasMany(c => c.Orders)
                .WithOne(o => o.Customer);
            builder.HasQueryFilter(c => !c.IsDeleted);
        }
    }
}