//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusinessObjects
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    [MetadataType(typeof(BusinessObjects.Metadata.LicenseMetadata))]
    public partial class License : IEntity<short>
    {
        public License()
        {
            this.Organization = new HashSet<Organization>();
            this.UserLicenseRating = new HashSet<UserLicenseRating>();
        }
    
        public short Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Text { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public System.DateTime ModifiedOn { get; set; }
        public Nullable<System.DateTime> DeletedOn { get; set; }
    
        public virtual ICollection<Organization> Organization { get; set; }
        public virtual ICollection<UserLicenseRating> UserLicenseRating { get; set; }
    }
}
